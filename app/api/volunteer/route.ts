import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

// GET endpoint to fetch volunteer data
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the user ID from the email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        volunteer: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user.volunteer);
  } catch (error) {
    console.error('Error fetching volunteer information:', error);
    return NextResponse.json(
      { error: 'Failed to fetch volunteer information' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    
    // Get the user ID from the email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Create or update volunteer information
    const volunteer = await prisma.volunteer.upsert({
      where: {
        userId: user.id,
      },
      create: {
        userId: user.id,
        first_name: data.first_name,
        second_name: data.second_name,
        phone_number: data.phone,
        date_of_birth: new Date(data.birthday),
        gender: data.gender,
        country: data.country,
        city: data.city,
        volunteering_status: true, // Default to available
        job_type_id: "default", // You might want to handle this differently
        employment_status: false, // Default to not employed
        skills: "", // Will be updated in skills section
        schedule_of_volunteering_work: "", // Will be updated later
        time_of_volunteer: 0, // Will be updated later
        languages: "", // Will be updated in languages section
        interests: "", // Will be updated later
      },
      update: {
        first_name: data.first_name,
        second_name: data.second_name,
        phone_number: data.phone,
        date_of_birth: new Date(data.birthday),
        gender: data.gender,
        country: data.country,
        city: data.city,
      },
    });

    return NextResponse.json(volunteer);
  } catch (error) {
    console.error('Error saving volunteer information:', error);
    return NextResponse.json(
      { error: 'Failed to save volunteer information' },
      { status: 500 }
    );
  }
} 