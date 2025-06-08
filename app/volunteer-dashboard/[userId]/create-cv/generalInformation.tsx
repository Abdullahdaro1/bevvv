import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface FloatingLabelInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
}

const FloatingLabelInput = ({ name, value, onChange, label, required = false }: FloatingLabelInputProps) => {
    return (
        <div className="relative pt-5 w-full">
            <input
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full bg-transparent outline-none text-[17px] py-[7px] transition-all duration-200 focus:border-b-1 focus:border-gradient-to-r focus:text-tertiary focus:to-primary focus:font-bold placeholder-transparent peer ${!value ? 'border-b border-[#6b6b6b]' : 'border-b-0'}`}
                type="text"
                placeholder={label}
            />
{/*             <label 
                htmlFor={name}
                className="absolute top-0 block transition-all duration-200 text-[17px] text-[#FFE699] pointer-events-none peer-placeholder-shown:text-[17px] peer-placeholder-shown:top-5 peer-focus:text-[17px] peer-focus:text-[#FFE699] peer-focus:font-bold peer-focus:top-0"
            >
                {label}
            </label> */}
        </div>
    );
};

export default function GeneralInformation() {
    const [formData, setFormData] = useState({
        employeeId: "A0001",
        idNumber: "0001234567",
        phone: "(719) 860-5684",
        email: "elizabethlopez95@hotmail.com",
        city: "Aleppo",
        country: "Syria",
        birthday: "May 15, 1995",
        gender: "Female",
        maritalStatus: "Single",
        nationality: "USA"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="text-primary text-xl">General Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Left block */}
                <div className="space-y-4">
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Employee ID</div>
                    <FloatingLabelInput 
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        label="Employee ID"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">ID Number</div>
                    <FloatingLabelInput 
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        label="ID Number"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Phone</div>
                    <FloatingLabelInput 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        label="Phone"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Email</div>
                    <FloatingLabelInput 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">City</div>
                    <FloatingLabelInput 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        label="City"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Country</div>
                    <FloatingLabelInput 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                    />
                  </div>
                </div>

                {/* Right block */}
                <div className="space-y-4">
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Birthday</div>
                    <FloatingLabelInput 
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        label="Birthday"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Gender</div>
                    <FloatingLabelInput 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        label="Gender"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Marital Status</div>
                    <FloatingLabelInput 
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        label="Marital Status"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-4">
                    <div className="font-semibold">Nationality</div>
                    <FloatingLabelInput 
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        label="Nationality"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
    )
}