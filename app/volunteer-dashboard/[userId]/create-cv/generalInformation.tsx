import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FloatingLabelInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
    type?: string;
}

const FloatingLabelInput = ({ name, value, onChange, label, required = false, type = "text" }: FloatingLabelInputProps) => {
    return (
        <div className="relative w-full">
            <input
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                className={`w-full bg-transparent outline-none text-[17px] py-[7px] transition-all duration-200 focus:border-b-1 focus:border-gradient-to-r focus:text-tertiary focus:to-primary focus:font-bold placeholder-transparent peer ${!value ? 'border-b border-[#6b6b6b]' : 'border-b-0'}`}
                placeholder={label}
            />
        </div>
    );
};

export default function GeneralInformation() {
    const [formData, setFormData] = useState({
        first_name: "",
        second_name: "",
        employeeId: "A0001",
        idNumber: "0001234567",
        phone: "",
        email: "",
        country: "",
        city: "",
        birthday: "",
        gender: "",
        maritalStatus: "",
        nationality: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
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
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">First Name</div>
                    <FloatingLabelInput 
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        label="First Name"
                        required={true}
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Surname</div>
                    <FloatingLabelInput 
                        name="second_name"
                        value={formData.second_name}
                        onChange={handleChange}
                        label="Surname"
                        required={true}
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Employee ID</div>
                    <FloatingLabelInput 
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        label="Employee ID"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">ID Number</div>
                    <FloatingLabelInput 
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        label="ID Number"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Phone Number</div>
                    <FloatingLabelInput 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        label="Phone Number"
                        type="tel"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Email</div>
                    <FloatingLabelInput 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        type="email"
                    />
                  </div>
                </div>

                {/* Right block */}
                <div className="space-y-4">
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Birthday</div>
                    <FloatingLabelInput 
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        label="Birthday"
                        type="date"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Gender</div>
                    <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                        <SelectTrigger className="w-full bg-transparent border-b border-[#6b6b6b]">
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Marital Status</div>
                    <Select value={formData.maritalStatus} onValueChange={(value) => handleSelectChange("maritalStatus", value)}>
                        <SelectTrigger className="w-full bg-transparent border-b border-[#6b6b6b]">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Single">Single</SelectItem>
                            <SelectItem value="Married">Married</SelectItem>
                            <SelectItem value="Divorced">Divorced</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Nationality</div>
                    <Select value={formData.nationality} onValueChange={(value) => handleSelectChange("nationality", value)}>
                        <SelectTrigger className="w-full bg-transparent border-b border-[#6b6b6b]">
                            <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="USA">United States</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="Germany">Germany</SelectItem>
                            <SelectItem value="France">France</SelectItem>
                            <SelectItem value="Spain">Spain</SelectItem>
                            <SelectItem value="Italy">Italy</SelectItem>
                            <SelectItem value="Japan">Japan</SelectItem>
                            <SelectItem value="China">China</SelectItem>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="Brazil">Brazil</SelectItem>
                            <SelectItem value="Mexico">Mexico</SelectItem>
                            <SelectItem value="Russia">Russia</SelectItem>
                            <SelectItem value="South Africa">South Africa</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Country</div>
                    <FloatingLabelInput 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">City</div>
                    <FloatingLabelInput 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        label="City"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
    )
}