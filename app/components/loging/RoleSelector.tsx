'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Role = 'VOLUNTEER' | 'ORGANIZATION';

interface RoleSelectorProps {
  defaultRole?: Role;
}

export function RoleSelector({ defaultRole = 'VOLUNTEER' }: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<Role>(defaultRole);

  return (
    <div className="flex gap-4 mb-4">
      <input 
        type="hidden" 
        name="role" 
        value={selectedRole}
        readOnly
      />
      <Button
        type="button"
        variant={selectedRole === 'VOLUNTEER' ? 'default' : 'outline'}
        onClick={() => setSelectedRole('VOLUNTEER')}
        className="flex-1"
      >
        Volunteer
      </Button>
      <Button
        type="button"
        variant={selectedRole === 'ORGANIZATION' ? 'default' : 'outline'}
        onClick={() => setSelectedRole('ORGANIZATION')}
        className="flex-1"
      >
        Organization
      </Button>
    </div>
  );
} 