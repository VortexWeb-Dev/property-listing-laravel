import PaginationComponent from "@/Components/PaginationComponent";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { MoreVertical } from "lucide-react";

export default function Index({
    owners,
    queryParams,
}: {
    owners: any;
    queryParams: any;
}) {
    console.log(owners);
    queryParams = queryParams || {};
    return (
        <MainLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Agents
                </h2>
            }
        >
            <Head title="Agents" />

            <div className="container mx-auto p-4 lg:px-16">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-50 text-nowrap">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bitrix ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Phone No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Designation
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {owners?.data?.map((owner: any) => (
                                <tr key={owner.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {owner?.bitrix_id || "NA"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {owner?.image_url && (
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={owner?.image_url}
                                                    alt="agent"
                                                />
                                            )}
                                            <div className="ml-2">
                                                <div className="text-sm text-gray-900">
                                                    {owner?.name || "NA"}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {owner?.phone || ""}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {owner?.phone || "NA"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {owner?.email || ""}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {owner?.email || "NA"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${
                                                owner?.role === "agent"
                                                    ? "bg-green-100 text-green-800"
                                                    : owner.role === "draft"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {owner?.role || "NA"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {owner?.designation || ""}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {owner?.designation || "NA"}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <button className="text-gray-400 hover:text-gray-500">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* pgination */}
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <PaginationComponent
                            meta={owners.meta}
                            queryParams={queryParams}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
