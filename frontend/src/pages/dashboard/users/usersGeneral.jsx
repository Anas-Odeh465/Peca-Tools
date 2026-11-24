import { UserCheck, Users, UserX2Icon, ActivityIcon, UserPlus, FilterIcon, FileOutputIcon, Settings } from "lucide-react";
import AvatarBuilder from "../../../ui/AvatarBuilder";

export default function UsersGeneral() {
  

    const usersTest = [
        { id: 1, name: 'Anas', lastName: 'Odeh', username: 'anas.o', Connection: 'online', status: "Active", role: 'Admin' },
        { id: 2, name: 'Sara', lastName: 'Haddad', username: 'sara.h', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 3, name: 'Omar', lastName: 'Khalil', username: 'omar.k', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 4, name: 'Lina', lastName: 'Mansour', username: 'lina.m', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 5, name: 'Khaled', lastName: 'Nasser', username: 'khaled.n', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 6, name: 'Maya', lastName: 'Saleh', username: 'maya.s', Connection: 'offline', status: "Active", role: 'Manager' },
        { id: 7, name: 'Yousef', lastName: 'Darwish', username: 'yousef.d', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 8, name: 'Nour', lastName: 'Farah', username: 'nour.f', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 9, name: 'Adam', lastName: 'Yasin', username: 'adam.y', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 10, name: 'Rana', lastName: 'Qasem', username: 'rana.q', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 11, name: 'Hadi', lastName: 'Barakat', username: 'hadi.b', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 12, name: 'Dina', lastName: 'Awad', username: 'dina.a', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 13, name: 'Ali', lastName: 'Jaber', username: 'ali.j', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 14, name: 'Leen', lastName: 'Taha', username: 'leen.t', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 15, name: 'Tareq', lastName: 'Zein', username: 'tareq.z', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 16, name: 'Salma', lastName: 'Rami', username: 'salma.r', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 17, name: 'Hassan', lastName: 'Mahmoud', username: 'hassan.m', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 18, name: 'Jana', lastName: 'Elias', username: 'jana.e', Connection: 'offline', status: "Inactive", role: 'Viewer' },
        { id: 19, name: 'Zaid', lastName: 'Hamdan', username: 'zaid.h', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 20, name: 'Farah', lastName: 'Othman', username: 'farah.o', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 21, name: 'Anas', lastName: 'Qadri', username: 'anas.q', Connection: 'online', status: "Active", role: 'Admin' },
        { id: 22, name: 'Sara', lastName: 'Naim', username: 'sara.n', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 23, name: 'Omar', lastName: 'Dabbas', username: 'omar.d', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 24, name: 'Lina', lastName: 'Hussein', username: 'lina.h', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 25, name: 'Khaled', lastName: 'Masri', username: 'khaled.m', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 26, name: 'Maya', lastName: 'Rashid', username: 'maya.r', Connection: 'offline', status: "Active", role: 'Manager' },
        { id: 27, name: 'Yousef', lastName: 'Abboud', username: 'yousef.a', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 28, name: 'Nour', lastName: 'Shami', username: 'nour.s', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 29, name: 'Adam', lastName: 'Khatib', username: 'adam.k', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 30, name: 'Rana', lastName: 'Daher', username: 'rana.d', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 31, name: 'Hadi', lastName: 'Saad', username: 'hadi.s', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 32, name: 'Dina', lastName: 'Fares', username: 'dina.f', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 33, name: 'Ali', lastName: 'Mikhael', username: 'ali.m', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 34, name: 'Leen', lastName: 'Hamdi', username: 'leen.h', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 35, name: 'Tareq', lastName: 'Bishara', username: 'tareq.b', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 36, name: 'Salma', lastName: 'Kanaan', username: 'salma.k', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 37, name: 'Hassan', lastName: 'Jamal', username: 'hassan.j', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 38, name: 'Jana', lastName: 'Zureikat', username: 'jana.z', Connection: 'offline', status: "Inactive", role: 'Viewer' },
        { id: 39, name: 'Zaid', lastName: 'Rifai', username: 'zaid.r', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 40, name: 'Farah', lastName: 'Sabbagh', username: 'farah.s', Connection: 'offline', status: "Inactive", role: 'Team Member' },
    ];

    const totalUsersCounter = usersTest.length;

    const activeUsersCounter = usersTest.filter(
        (user) => user.status === "Active"
    ).length;

    const inactiveUsersCounter = usersTest.filter(
        (user) => user.status === "Inactive"
    ).length;

    const onlineUsersCounter = usersTest.filter(
        (user) => user.Connection === "online"
    ).length;


    const usersOverview = [
        {name: "Total users", icon: Users, count: totalUsersCounter},
        {name: "Active users", icon: UserCheck, count: activeUsersCounter},
        {name: "Inactive users", icon: UserX2Icon, count: inactiveUsersCounter},
        {name: "Online users", icon: ActivityIcon, count: onlineUsersCounter}
    ]

    return (
        <div className="flex w-full min-w-0 flex-col items-center space-y-4 p-2 transition-all duration-300 ease-in-out overflow-x-hidden">
            <div className="flex w-full max-w-[1560px] min-w-0 flex-col space-y-6">
                <div className="w-full space-y-4">
                    <h1>Users Overview</h1>
                    <div className="flex w-full flex-wrap items-stretch justify-center gap-4">
                        {usersOverview.map((item) => (
                            <div
                                key={item.name}
                                className="flex w-full min-w-0 flex-col items-start justify-center gap-2 rounded-md border border-gray-200 p-6 sm:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)]"
                            >
                                <item.icon className="text-blue-900" size={18} />
                                <span className="text-2xl text-gray-600">
                                    {item.count}
                                </span>
                                <span className="text-md text-gray-500">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <div className="flex w-full flex-wrap items-stretch justify-start gap-4">
                        <button className="text-sm flex items-center text-white cursor-pointer py-2.5 px-4 bg-blue-900 hover:bg-blue-800 rounded-lg text-nowrap gap-2">
                            Add user
                            <UserPlus size={16} />
                        </button>
                        <button className="text-sm flex items-center text-gray-500 cursor-pointer py-2.5 px-4 border border-gray-200 hover:bg-gray-200 rounded-lg text-nowrap gap-2">
                            Export
                            <FileOutputIcon size={16} />
                        </button>
                        <button className="text-sm flex items-center text-gray-500 cursor-pointer py-2.5 px-4 border border-gray-200 hover:bg-gray-200 rounded-lg text-nowrap gap-2">
                            Filter
                            <FilterIcon size={16} />
                        </button>
                        <input type="text" placeholder="Search a user..." className="outline-none border border-gray-200 rounded-md p-2  focus-within:ring-blue-800 focus-within:ring-2 w-3xl"/>
                    </div>
                    <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain rounded-md">
                        <table className="w-full min-w-225 table-auto border-collapse whitespace-nowrap text-left text-sm">
                            <thead className="bg-[#f3f3f3] text-gray-600">
                                <tr>
                                    <th className="px-4 py-3 font-medium">
                                        Id
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        User
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Role
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Connection
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {usersTest.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            {user.id}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <AvatarBuilder name={user.name} lastname={user.lastName}/>
                                                <div className="flex flex-col gap-0.5">
                                                    <div className="space-x-1">
                                                        <span>{user.name}</span>
                                                        <span>{user.lastName}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{user.username}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            {user.role}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={` text-xs p-1 rounded-full
                                                    ${user.status === "Active"
                                                        ? "text-green-600 bg-green-200"
                                                        : "text-red-600 bg-red-200"
                                                    }
                                                `}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`h-2 w-2 rounded-full ${
                                                        user.Connection === "online"
                                                            ? "bg-blue-600"
                                                            : "bg-gray-400"
                                                    }`}
                                                />

                                                <span
                                                    className={`text-sm ${
                                                        user.Connection === "online"
                                                            ? "text-blue-600"
                                                            : "text-gray-500"
                                                    }`}
                                                >
                                                    {user.status === "online" ? "Online" : "Offline"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Settings size={20} className="cursor-pointer text-gray-700"/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}