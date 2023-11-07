import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import React from "react";

function ParticipantsForm() {
    return (
        <>
            <div className="h-screen flex items-center justify-center container">
                <div className="w-1/2 border">
                    <h2 className="text-2xl font-bold mb-4">
                        Participant Form
                    </h2>
                    <form action="" method="post" className="space-y-4">
                        <div>
                            <Label
                                htmlFor="email"
                                className="text-lg block font-semibold"
                            >
                                Email:
                            </Label>
                            <input
                                className="w-1/2"
                                type="email"
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="name"
                                className="text-lg block font-semibold"
                            >
                                Name:
                            </Label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div>
                            <Label
                                htmlFor="phone"
                                className="text-lg block font-semibold"
                            >
                                Phone Number:
                            </Label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                            />
                        </div>
                        {/* <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button> */}
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ParticipantsForm;
