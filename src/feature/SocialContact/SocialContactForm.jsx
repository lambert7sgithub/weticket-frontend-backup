import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, message, Radio, Select} from "antd";
import './css/SocialContactForm.css';
import {useSelector} from "react-redux";
import {addSocialForm} from "../../api/socialForm";

const {Option} = Select;
const SocialContactForm = () => {
    const films = useSelector(state => state.socialContact.films);
    const cinemas = useSelector(state => state.socialContact.cinemas);
    const [form] = Form.useForm();

    const [formData, setFormData] = useState({});

    const filmChildren = () => {
        return films.map((film) =>
            <Option key={film.movieId} value={film.movieName}>{film.movieName}</Option>
        )
    };
    const cinemaChildren = () => {
        return cinemas.map((cinema) =>
            <Option key={cinema.cinemaId} value={cinema.cinemaName}>{cinema.cinemaName}</Option>
        )
    };

    const handleSelectFilmsChange = (value) => {
        setFormData({...formData, 'films': value.toString()})
    };

    const handleSelectCinemasChange = (value) => {
        setFormData({...formData, 'cinemas': value.toString()})
    };

    const commitSocialForm = () => {
        let key = new Date();
        if (formData.films === '' && formData.cinemas === '') {
            message.warning({content: '请选择影院或电影！！', key});
            return;
        }
        key = new Date();
        addSocialForm(formData).then(() => {
            message.loading({content: '观影结伴意向报告提交中...', key});
        }).finally(() => {
            form.resetFields();
            setFormData({
                name: '',
                gender: '',
                phone: '',
                films: '',
                cinemas: ''
            });
            message.success({content: '观影结伴意向报告提交完毕!', key, duration: 3});
        })
    };


    const nameChange = (event) => {
        setFormData({...formData, 'name': event.target.value});
    };

    const phoneChange = (event) => {
        setFormData({...formData, 'phone': event.target.value});
    };
    const genderChange = (event) => {
        setFormData({...formData, 'gender': event.target.value});
    };
    return (
        <div>
            <Col offset={8} className="socialContactTable">
                <Card
                    hoverable
                    title="交友意向报名"
                    bordered={false}
                    style={{
                        width: 600,
                        height: 750
                    }}
                >
                    <Form
                        layout="vertical"
                        size="large"
                        form={form}
                    >

                        <Form.Item name="name" label="姓名" onChange={nameChange}>
                            <Input placeholder="请输入姓名"/>
                        </Form.Item>
                        <Form.Item name="gender" label="性别" className="genderRadioGroup" onChange={genderChange}>
                            <Radio.Group>
                                <Radio value="male"> 男 </Radio>
                                <Radio value="female"> 女 </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="phone" label="联系电话" onChange={phoneChange}>
                            <Input placeholder="请输入联系电话"/>
                        </Form.Item>

                        <Form.Item name="cinemas" label="意向电影院" wrapperCol={8}>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{width: '100%'}}
                                placeholder="请选择影院"
                                onChange={handleSelectCinemasChange}
                            >
                                {cinemaChildren()}
                            </Select>
                        </Form.Item>

                        <Form.Item name="films" label="意向电影">
                            <Select
                                mode="multiple"
                                allowClear
                                placeholder="请选择电影"
                                onChange={handleSelectFilmsChange}
                            >
                                {filmChildren()}
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type={"primary"} onClick={commitSocialForm}>
                                报名提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>

        </div>
    );
};

export default SocialContactForm;