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

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "jkashdjklashdjkashdkhsahdsajkhd",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

export default function Dashboard({ auth, participants }) {
    console.log(participants.links);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

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
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {participants.data.map(
                                        (participant, index) => (
                                            <TableRow key={participant.id}>
                                                <TableCell className="font-medium text-center">
                                                    {participants.per_page *
                                                        (participants.current_page -
                                                            1) +
                                                        index +
                                                        1}
                                                </TableCell>
                                                <TableCell>
                                                    {participant.name}
                                                </TableCell>
                                                <TableCell>
                                                    {participant.email}
                                                </TableCell>
                                                <TableCell>
                                                    {participant.phone}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )}
                                </TableBody>
                            </Table>
                            <div className="mt-4">
                                {participants.links.map((link, index) => (
                                    <span key={index} className="mr-2">
                                        <button
                                            onClick={() =>
                                                participants.current_page !==
                                                    link.url &&
                                                window.location.assign(link.url)
                                            }
                                            className={`px-3 py-1 border ${
                                                participants.current_page ===
                                                link.url
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-white"
                                            }`}
                                        >
                                            {link.label}
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
