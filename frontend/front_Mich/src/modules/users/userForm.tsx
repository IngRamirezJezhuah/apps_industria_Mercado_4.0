import { Form, Input } from 'antd';

function UserForm() {
    const [form] = Form.useForm();

    return (
        <div>
            <h2>Formulario Horizontal</h2>
            <Form
                form={form}
                name="layout-horizontal"
                layout="horizontal"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
            >
                <Form.Item
                    label="Campo 1"
                    name="campo1"
                    rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Campo 2"
                    name="campo2"
                    rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                >
                    <Input />
                </Form.Item>
            </Form>

            <br />

            <h2>Formulario Vertical</h2>
            <Form
                name="layout-vertical"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="Campo 3"
                    name="campo3"
                    rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Campo 4"
                    name="campo4"
                    rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
}

export default UserForm;
