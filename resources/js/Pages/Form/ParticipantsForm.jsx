import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/components/ui/input";
import { Head } from "@inertiajs/react";
import React from "react";

function ParticipantsForm(props) {
    return (
        <>
            <Head title={props.title} />
            {/* <header className="">
                <div className="container">
                    <div className="text-center items-center justify-between relative mt-5">
                        <h2 className="text-2xl font-bold">Participant Form</h2>
                    </div>
                </div>
            </header> */}
            <div className="h-screen grid col-span-12 place-items-center">
                <div className="w-1/2 bg-blue-200 border rounded-xl p-5">
                    <h2 className="text-2xl col-span-12 font-bold mb-4">
                        Participant Form
                    </h2>
                    <form action="" method="post" className="space-y-4">
                        <div>
                            <Label
                                htmlFor="email"
                                className="text-lg block font-semibold mb-2"
                            >
                                Email:
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="name"
                                className="text-lg block font-semibold mb-2"
                            >
                                Name:
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="phone"
                                className="text-lg block font-semibold mb-2"
                            >
                                Phone Number:
                            </Label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
            {/* <div className="h-screen flex items-center justify-center container">
                <div className="w-1/2 bg-blue-200 border rounded-xl p-5">
                    <h2 className="text-2xl font-bold mb-4">
                        Participant Form
                    </h2>
                    <form action="" method="post" className="space-y-4">
                        <div>
                            <Label
                                htmlFor="email"
                                className="text-lg block font-semibold mb-2"
                            >
                                Email:
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="name"
                                className="text-lg block font-semibold mb-2"
                            >
                                Name:
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="phone"
                                className="text-lg block font-semibold mb-2"
                            >
                                Phone Number:
                            </Label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="w-1/2"
                                required
                            />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default ParticipantsForm;
