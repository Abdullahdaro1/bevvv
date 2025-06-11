import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

// GET endpoint to fetch education data
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        volunteer: {
          include: {
            education: true
          }
        }
      }
    });

    if (!user?.volunteer) {
      return NextResponse.json({ error: 'Volunteer not found' }, { status: 404 });
    }

    return NextResponse.json(user.volunteer.education);
  } catch (error) {
    console.error('Error fetching education:', error);
    return NextResponse.json(
      { error: 'Failed to fetch education data' },
      { status: 500 }
    );
  }
}

// POST endpoint to create new education entry
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        volunteer: true
      }
    });

    if (!user?.volunteer) {
      return NextResponse.json({ error: 'Volunteer not found' }, { status: 404 });
    }

    console.log('Creating education with volunteer_id:', user.volunteer.volunteer_id); // Debug log

    const education = await prisma.education.create({
      data: {
        volunteer_id: user.volunteer.volunteer_id,
        level: data.level,
        department: data.department,
        university: data.university,
        country: data.country,
        start_date: new Date(data.start_date),
        end_date: data.present ? null : new Date(data.end_date),
        is_present: data.present
      }
    });

    console.log('Created education:', education); // Debug log
    return NextResponse.json(education);
  } catch (error) {
    console.error('Detailed error in POST /api/volunteer/education:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create education entry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT endpoint to update education entry
export async function PUT(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    console.log('Update data:', data); // Debug log
    
    const education = await prisma.education.update({
      where: {
        id: data.id
      },
      data: {
        level: data.level,
        department: data.department,
        university: data.university,
        country: data.country,
        start_date: new Date(data.start_date),
        end_date: data.present ? null : new Date(data.end_date),
        is_present: data.present
      }
    });

    console.log('Updated education:', education); // Debug log
    return NextResponse.json(education);
  } catch (error) {
    console.error('Detailed error in PUT /api/volunteer/education:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update education entry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 