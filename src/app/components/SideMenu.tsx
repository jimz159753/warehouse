'use client'
import React from 'react'
import Link from 'next/link';
import { Menu, type MenuProps, } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const SideMenu = () => {
    const links = ['products', 'inputs', 'outputs']

    const items: MenuItem[] = ['Productos', 'Entradas', 'Salidas'].map(
        (title, index) =>
            getItem(<Link key={title} href={links[index]}>
                <p>{title}</p>
            </Link>, index)
    );

    return (
        <Menu theme="dark" mode="inline" items={items} />
    )
}
