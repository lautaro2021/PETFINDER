import React, { useMemo } from 'react'
import Loader from '@/app/components/loader/Loader'
import styles from './usersData.module.css';
import NavButton from '@/app/components/button/NavButton';
import ActionButton from '@/app/components/button/ActionButton';

function UsersData({ data }: { data: any[] }) {

    const downloadCSV = (data: any[]) => {
        const csvContent = "data:text/csv;charset=utf-8," +
            data.map(row => Object.values(row).join(',')).join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", 'usuarios');
        document.body.appendChild(link);

        link.click();
    }

    const handleDownload = () => {
        downloadCSV(data);
    }

    if (!data) {
        return (
            <div className={styles.loaderContainer}>
                <Loader />
            </div>
        )
    }

    return (
        <section className={styles.container}>
            <header>
                <NavButton type='link' href='/qr-generator' text='Volver' />
                <div>
                    <ActionButton text='Descargar datos' action={handleDownload} />
                </div>
            </header>
            <table className={styles.QRGeneratorTable}>
                <thead>
                    <tr>
                        <td>Foto perfil</td>
                        <td>Nombre</td>
                        <td>Teléfono</td>
                        <td>Localidad</td>
                        <td>Provincia</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user: any, index: number) => {
                        const fullName = `${user.name} ${user.surname}`;
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={user.picture !== 'undefined' ? user.picture : '/assets/images/default_image.png'} alt='profile-image' />
                                </td>
                                <td>{fullName}</td>
                                <td>{user.phone ? user.phone : '-'}</td>
                                <td>{user.location ? user.location : '-'}</td>
                                <td>{user.province ? user.province : '-'}</td>
                                <td>{user.email ? user.email : '-'}</td>
                            </tr>
                        )
                    })}
                </tbody >
            </table >
        </section >
    )
}

export default UsersData