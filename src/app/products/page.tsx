'use client'
import React, { useState } from 'react'
import { Popconfirm, Table } from 'antd'
import { DeleteOutlined, EditOutlined, LoadingOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const Products = () => {
    const [data, setData] = useState()

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Codigo',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Proveedor',
            dataIndex: 'provider',
            key: 'provider',
        },
        {
            title: 'Codigo de Proveedor',
            dataIndex: 'providerCode',
            key: 'providerCode',
        },
        {
            title: 'Costo/Paquete',
            dataIndex: 'packagePrice',
            key: 'packagePrice',
        },
        {
            title: 'Cantidad/Paquete',
            dataIndex: 'packageAmount',
            key: 'packageAmount',
        },
        {
            title: 'Pieza/Paquete',
            dataIndex: 'packagePart',
            key: 'packagePart',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'TOTAL/Pieza',
            dataIndex: 'totalPart',
            key: 'totalPart',
        },
        {
            title: 'Stock/Min',
            dataIndex: 'stockMin',
            key: 'stockMin',
        },
        {
            title: 'Stock/Max',
            dataIndex: 'stockMax',
            key: 'stockMax',
        },
        {
            title: 'Codigo de barras',
            dataIndex: 'barcode',
            key: 'barcode',
        },
        {
            title: 'Codigo Qr',
            dataIndex: 'qrCode',
            key: 'qrCode',
        },
        {
            title: 'Acción',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: (timestamp: string) => <div>
                <EditOutlined style={{ color: '#6582EB' }} />
                <Popconfirm
                    title="Borrar registro"
                    okText="Si"
                    cancelText="No"
                    onConfirm={() => { }}
                    description="¿Seguro que quieres borrar este registro?"
                    icon={<QuestionCircleOutlined style={{ color: 'red' }}
                    />}
                >
                    <DeleteOutlined style={{ color: '#E74E4E' }} />
                </Popconfirm>
            </div>
        },
    ]

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Products;