import { Menu } from '@headlessui/react';
import { Link } from "react-router-dom";

const DropdownMenu = ({ buttonContent, items }) => {
    return (
        <Menu as="div" className="dropdown">
            <Menu.Button className="btn btn-secondary dropdown-toggle" type="button">
                {buttonContent}
            </Menu.Button>
            <Menu.Items as="div" className="dropdown-menu d-block">
                {items.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div
                            className={`sort-filter ${item.isActive ? 'active' : ''}`}
                            style={{
                                width: item.width || 'auto',
                                borderRadius: '8px', // Ajusta el radio del borde según tu preferencia
                                textAlign: 'center', // Centra el texto
                                justifyContent: 'center', // Justifica el contenido del elemento
                            }}
                        >
                            <span>{item.label}</span>
                            {item.isActive && <span className="icon-tick"><span className="path2" /></span>}
                        </div>
                    </Link>
                ))}
                <style jsx>{`
                    .sort-filter.active {
                        background-color: transparent; /* Cambia el fondo a transparente cuando está activo */
                    }
                    .sort-filter:hover {
                        background-color: #105563; /* Cambia el fondo a negro cuando el mouse está sobre el elemento */
                    }
                `}</style>
            </Menu.Items>
        </Menu>
    );
};

export default DropdownMenu;



