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

function ConfigurationEvent({ auth }) {
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
                                        A list of recent participants.
                                    </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] text-center">
                                                #
                                            </TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>E-Mail</TableHead>
                                            <TableHead>Phone Number</TableHead>
                                            <TableHead>Instansi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody></TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default ConfigurationEvent;
