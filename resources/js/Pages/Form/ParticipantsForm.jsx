import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function ParticipantsForm(props) {
    const { message } = usePage().props;
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data, setData, errors, post } = useForm({
        email: "",
        name: "",
        phone: "",
    });

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     post(route("post.participant"));

    //     data.email = "";
    //     data.name = "";
    //     data.phone = "";
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            post(route("post.participant"), {
                onSuccess: () => {
                    setSuccessMessage(
                        "Data Berhasil Disimpan, Silahkan Klik Button Dibawah untuk Melanjutkan"
                    );

                    setData("email", "");
                    setData("name", "");
                    setData("phone", "");
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (successMessage) {
            const timeoutId = setTimeout(() => {
                setSuccessMessage("");
            }, 8000);

            return () => clearTimeout(timeoutId);
        }
    }, [successMessage]);

    return (
        <div className="flex flex-col justify-center items-center mt-28">
            <Head title={props.title} />
            <Card
                className={cn("md:w-[500px] shadow-lg bg-primary-foreground")}
            >
                <CardHeader className="text-center">
                    <CardTitle>Participant Form</CardTitle>
                    <CardDescription>
                        Please fill this form below
                    </CardDescription>
                </CardHeader>
                {successMessage && (
                    <div className="text-center text-sm text-green-600 mb-3">
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <CardContent className={cn("grid grid-cols-12 gap-5")}>
                        <div className="grid w-full col-span-12 items-center gap-1.5">
                            <Label htmlFor="email">Email :</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {errors.email && (
                                <span className="text-red-600">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="grid w-full col-span-12 items-center gap-1.5">
                            <Label htmlFor="name">Name :</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {errors.name && (
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="grid w-full col-span-12 items-center gap-1.5">
                            <Label htmlFor="phone">Phone Number :</Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                required
                            />
                            {errors.phone && (
                                <span className="text-red-600">
                                    {errors.phone}
                                </span>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className={cn("w-full")}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </CardFooter>
                </form>
                <hr className="w-full" />
                <a href="https://www.google.co.id/" className="ml-[25%]">
                    <Button className="w-1/2 my-5">test</Button>
                </a>
            </Card>
        </div>
    );
}

export default ParticipantsForm;
