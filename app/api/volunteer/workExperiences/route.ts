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
              work_experience: true
            }
          }
        }
      });
  
      if (!user?.volunteer) {
        return NextResponse.json({ error: 'Volunteer not found' }, { status: 404 });
      }
  
      return NextResponse.json(user.volunteer.work_experience);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch work experience data' },
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
  
      const workExperience = await prisma.workExperience.create({
        data: {
          volunteer_id: user.volunteer.volunteer_id,
          company_name: data.company_name,
          position: data.position,
          start_date: new Date(data.start_date),
          end_date: data.present ? null : new Date(data.end_date),
          is_present: data.present,
          description: data.description,
          country: data.country
        }
      });
  
      return NextResponse.json(workExperience);
    } catch (error) {
      return NextResponse.json(
        { 
          error: 'Failed to create work experience entry',
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
      
      const workExperience = await prisma.workExperience.update({
        where: {
          id: data.id
        },
        data: {
          company_name: data.company_name,
          position: data.position,
          country: data.country,
          start_date: new Date(data.start_date),
          end_date: data.present ? null : new Date(data.end_date),
          is_present: data.present,
          description: data.description
        }
      });
  
      return NextResponse.json(workExperience);
    } catch (error) {
      return NextResponse.json(
        { 
          error: 'Failed to update work experience entry',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  } 

  