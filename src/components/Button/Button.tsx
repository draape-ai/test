import { useRouter } from 'next/router';
import styles from './Button.module.css';

type ButtonT = {
    size?: 'medium' | 'small',
    variant?: 'ghost' | 'solid',
    route: string,
    children?: any,
    active?: boolean,
    disabled?: boolean,
    className?: any;
}

export default function Button({
    size = 'medium',
    variant = 'solid',
    route,
    children,
    active,
    disabled,
    className
}: ButtonT) {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    }

    return (
        <button 
            disabled={disabled} 
            onClick={handleClick} 
            className={`${styles.base} ${styles[size]} ${styles[variant]} ${active ? styles.active : ''} ${className}`}
        >
            {children}
        </button>
    )
}