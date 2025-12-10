import styles from './Formulario.module.css';

import { useState } from "react";

const Formulario = ({ aoBuscar, buscaVisivel }) => {
    const [termoBusca, setTermoBusca] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (termoBusca.trim()) {
            aoBuscar(termoBusca.trim());
            setTermoBusca('');
        }
    };

return (
    <section className={`search-section ${buscaVisivel ? 'is-visible' : ''}`}>
        <div className="app-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Digite o nome de usuário do GitHub"
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                />
            </form>
        </div>
    </section>
);
};

export default Formulario;