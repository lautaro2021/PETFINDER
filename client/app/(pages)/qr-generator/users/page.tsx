'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NEXT_PUBLIC_BACK_URL } from '@/app/config/config'
import UsersData from '@/app/layouts/users-data/UsersData';

function Users() {
    const [usersData, setUsersData] = useState<any>();

    useEffect(() => {
        const data = async () => {
            await axios.get(`${NEXT_PUBLIC_BACK_URL}/petowner`)
                .then(res => setUsersData(res.data));
        }

        data();
    }, [])

    return (
        <UsersData data={usersData} />
    )
}

export default Users