import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" type="text" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/34757240?s=460&u=aff2f7d37b1a87484bc7b8daca3c6bfdf8b475e3&v=4"
                        alt="Ricardo Sparapan"
                    />

                    <div>
                        <strong>Ropo name</strong>
                        <p>Desc fake</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/34757240?s=460&u=aff2f7d37b1a87484bc7b8daca3c6bfdf8b475e3&v=4"
                        alt="Ricardo Sparapan"
                    />

                    <div>
                        <strong>Ropo name</strong>
                        <p>Desc fake</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/34757240?s=460&u=aff2f7d37b1a87484bc7b8daca3c6bfdf8b475e3&v=4"
                        alt="Ricardo Sparapan"
                    />

                    <div>
                        <strong>Ropo name</strong>
                        <p>Desc fake</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
