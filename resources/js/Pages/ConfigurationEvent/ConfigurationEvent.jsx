import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

function ConfigurationEvent({ auth, events }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Configuration Event
                    </h2>
                }
            >
                <Head title="Configuration Event" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Table>
                                    <TableCaption>
                                        A list of recent events.
                                    </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] text-center">
                                                #
                                            </TableHead>
                                            <TableHead>Event Name</TableHead>
                                            <TableHead>Link</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {events.data.map((event, index) => (
                                            <TableRow key={event.id}>
                                                <TableCell className="font-medium text-center">
                                                    {events.per_page *
                                                        (events.current_page -
                                                            1) +
                                                        index +
                                                        1}
                                                </TableCell>
                                                <TableCell>
                                                    {event.name}
                                                </TableCell>
                                                <TableCell>
                                                    {event.link}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <div className="mt-4">
                                    {events.links.map((link, index) => (
                                        <span key={index} className="mr-2">
                                            <button
                                                onClick={() =>
                                                    events.current_page !==
                                                        link.url &&
                                                    window.location.assign(
                                                        link.url
                                                    )
                                                }
                                                className={`px-3 py-1 border ${
                                                    events.current_page ===
                                                    link.url
                                                        ? "bg-blue-500 text-white"
                                                        : "bg-white"
                                                }`}
                                            >
                                                {link.label ===
                                                "&laquo; Previous"
                                                    ? "Prev"
                                                    : link.label ===
                                                      "Next &raquo;"
                                                    ? "Next"
                                                    : link.label}
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default ConfigurationEvent;
