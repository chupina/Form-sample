import React from "react";
import styles from "./Form.css";
import { Form, Input, Button, InputNumber, Checkbox } from "antd";
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log(values);
};

const CustomerForm = () => {
  return (
    <Form {...layout}
      name="customer_form"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <fieldset className={styles.fieldset}>
        <legend>Name</legend>
        <Form.Item className={styles.input}
        name={"name1"}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.input}
        name={"name2"}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.input}
        name={"name3"}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.input}
        name={"firstName"}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.input}
        name={"lastName"}
        label="Last Name" 
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.input}
        name={"middleName"}
        label="Middle Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      </fieldset>
      
      <Form.Item
        name={"email"}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"age"}
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={"website"} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={"introduction"} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;
