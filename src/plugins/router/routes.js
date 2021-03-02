export default [
    {
        path: '/',
        name: 'products',
        component: () => import('../../components/pages/product/index/Index'),
    },
    {
        path: '/update',
        name: 'product-update',
        component: () => import('../../components/pages/product/update/Update'),
    },
    {
        path: '/create',
        name: 'product-create',
        component: () => import('../../components/pages/product/create/Create'),
    },
];