
import { Form } from 'antd';
import React from 'react'
/**refce paa crear la plantilla, usa un atajo */
function userForm() {
    const [form]=Form.useForm();
    return (
        <div>userForm
        <Form
        name="layout-multiple-horizontal"
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        >
        <Form.Item label="horizontal" name="horizontal" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item
            layout="vertical"
            label="vertical"684b0037c2e3870b52b98873
            name="vertical"
            rules={[{ required: true }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
        >
            <Input />
        </Form.Item>
        </Form>
        <br />
        <Form
        name="layout-multiple-vertical"
        layout="vertical"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        >
        <Form.Item label="vertical" name="vertical" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item
            layout="horizontal"
            label="horizontal"
            name="horizontal"
            rules={[{ required: true }]}
        >
            <Input />
        </Form.Item>
        </Form>
        </div>
    )
}

export default userForm 