import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars2.githubusercontent.com/u/34757240?s=460&u=aff2f7d37b1a87484bc7b8daca3c6bfdf8b475e3&v=4"
                        alt="Avatar url"
                    />
                    <div>
                        <strong>node-acl-example</strong>
                        <p>desc fake</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1877</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>1877</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1877</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="asdasd">
                    <div>
                        <strong>repo name</strong>
                        <p>desc</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};
export default Repository;
