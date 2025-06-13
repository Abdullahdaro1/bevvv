
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

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

interface GeneralInformationProps {
  onFormDataChange: (data: any) => void;
}

export default function GeneralInformation({ onFormDataChange }: GeneralInformationProps) {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        organization_name: "",
        established_date: "",
        organization_type: "",
        organization_size: "",
        organization_website: "",   
        organization_description: "",
        organization_mission: "",
        organization_vision: "",
        organization_goals: "",
        organization_objectives: "",
        organization_activities: "",
        organization_needs: "",
        organization_contract: "",
        organization_preferred_region: "",
        organization_email: "",
        organization_reponsible_person: "",
    });

    // Fetch existing volunteer data
    useEffect(() => {
        const fetchVolunteerData = async () => {
            try {
                const response = await fetch('/api/volunteer');
                if (!response.ok) {
                    throw new Error('Failed to fetch volunteer data');
                }
                const data = await response.json();
                
                if (data) {
                    // Format the date to YYYY-MM-DD for the date input
                    const formattedDate = data.date_of_birth 
                        ? new Date(data.date_of_birth).toISOString().split('T')[0]
                        : '';
                    
                    setFormData({
                        organization_name: data.organization_name || "",
                        established_date: data.established_date || "",
                        organization_type: data.organization_type || "",
                        organization_size: data.organization_size || "",
                        organization_website: data.organization_website || "",
                        organization_description: data.organization_description || "",
                        organization_mission: data.organization_mission || "",
                        organization_vision: data.organization_vision || "",
                        organization_goals: data.organization_goals || "",
                        organization_objectives: data.organization_objectives || "",
                        organization_activities: data.organization_activities || "",
                        organization_needs: data.organization_needs || "",
                        organization_contract: data.organization_contract || "",
                        organization_preferred_region: data.organization_preferred_region || "",
                        organization_email: data.organization_email || "",
                        organization_reponsible_person: data.organization_reponsible_person || "",
                    });
                }
            } catch (error) {
                console.error('Error fetching volunteer data:', error);
                toast.error('Failed to load existing data');
            } finally {
                setIsLoading(false);
            }
        };

        if (session?.user?.email) {
            fetchVolunteerData();
        }
    }, [session]);

    // Notify parent component when form data changes
    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

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

    if (isLoading) {
        return (
            <Card className="col-span-4">
                <CardContent className="p-6">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                </CardContent>
            </Card>
        );
    }

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
                    <div className="font-semibold">Organization Name</div>
                    <FloatingLabelInput 
                        name="organization_name"
                        value={formData.organization_name}
                        onChange={handleChange}
                        label="Organization Name"
                        required={true}
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Established Date</div>
                    <FloatingLabelInput 
                        name="established_date"
                        value={formData.established_date}
                        onChange={handleChange}
                        label="Established Date"
                        required={true}
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Type</div>
                    <FloatingLabelInput 
                        name="organization_type"
                        value={formData.organization_type}
                        onChange={handleChange}
                        label="Organization Type"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Size</div>
                    <FloatingLabelInput 
                        name="organization_size"
                        value={formData.organization_size}
                        onChange={handleChange}
                        label="Organization Size"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Website</div>
                    <FloatingLabelInput 
                        name="organization_website" 
                        value={formData.organization_website}
                        onChange={handleChange}
                        label="Organization Website"
                        type="url"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Description</div>
                    <FloatingLabelInput 
                        name="organization_description"
                        value={formData.organization_description}
                        onChange={handleChange}
                        label="Organization Description"
                        type="text"
                    />
                  </div>
                </div>

                {/* Right block */}
                <div className="space-y-4">
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Mission</div>
                    <FloatingLabelInput 
                        name="organization_mission"
                        value={formData.organization_mission}
                        onChange={handleChange}
                        label="Organization Mission"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Vision</div>
                    <FloatingLabelInput 
                        name="organization_vision"
                        value={formData.organization_vision}
                        onChange={handleChange}
                        label="Organization Vision"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Goals</div>
                    <FloatingLabelInput 
                        name="organization_goals"
                        value={formData.organization_goals}
                        onChange={handleChange}
                        label="Organization Goals"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Objectives</div>
                    <FloatingLabelInput 
                        name="organization_objectives"
                        value={formData.organization_objectives}
                        onChange={handleChange}
                        label="Organization Objectives"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Activities</div>
                    <FloatingLabelInput 
                        name="organization_activities"
                        value={formData.organization_activities}
                        onChange={handleChange}
                        label="Organization Activities"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Needs</div>
                    <FloatingLabelInput 
                        name="organization_needs"
                        value={formData.organization_needs}
                        onChange={handleChange}
                        label="Organization Needs"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Contract</div>
                    <FloatingLabelInput 
                        name="organization_contract"
                        value={formData.organization_contract}
                        onChange={handleChange}
                        label="Organization Contract"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Preferred Region</div>
                    <FloatingLabelInput 
                        name="organization_preferred_region"
                        value={formData.organization_preferred_region}
                        onChange={handleChange}
                        label="Organization Preferred Region"
                        type="text"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Email</div>
                    <FloatingLabelInput 
                        name="organization_email"
                        value={formData.organization_email}
                        onChange={handleChange}
                        label="Organization Email"
                        type="email"
                    />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-x-1">
                    <div className="font-semibold">Organization Responsible Person</div>
                    <FloatingLabelInput 
                        name="organization_reponsible_person"
                        value={formData.organization_reponsible_person}
                        onChange={handleChange}
                        label="Organization Responsible Person"
                        type="text"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
    )
}