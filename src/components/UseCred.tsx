import React, { useState } from 'react';

export interface UserCredentialsData {
    login: string;
    password: string;
}

interface UserCredentialsProps {
    initialLogin?: string;
    initialPassword?: string;
    onSave?: (data: UserCredentialsData) => void;
}

const UserCredentials: React.FC<UserCredentialsProps> = ({
    initialLogin = '',
    initialPassword = '',
    onSave,
}) => {
    const [login, setLogin] = useState<string>(initialLogin);
    const [password, setPassword] = useState<string>(initialPassword);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
        if (onSave) {
            onSave({ login, password });
        }
    };

    return (
        <div style={styles.container}>
            <h3>Дані облікового запису</h3>

            {isEditing ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.field}>
                        <label htmlFor="login-input">Логін:</label>
                        <input
                            id="login-input"
                            type="text"
                            value={login}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setLogin(e.target.value)
                            }
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.field}>
                        <label htmlFor="password-input">Пароль:</label>
                        <input
                            id="password-input"
                            type="text"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.actions}>
                        <button type="submit" style={styles.buttonPrimary}>
                            Зберегти
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            style={styles.buttonSecondary}
                        >
                            Скасувати
                        </button>
                    </div>
                </form>
            ) : (
                <div>
                    <p>
                        <strong>Логін:</strong> {login || 'Не вказано'}
                    </p>
                    <p>
                        <strong>Пароль:</strong>{' '}
                        {password ? (showPassword ? password : '••••••••') : 'Не вказано'}
                        {password && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={styles.toggleBtn}
                            >
                                {showPassword ? 'Сховати' : 'Показати'}
                            </button>
                        )}
                    </p>
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        style={styles.buttonPrimary}
                    >
                        Змінити дані
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        fontFamily: 'sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
    },
    field: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '4px',
    },
    input: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    actions: {
        display: 'flex',
        gap: '8px',
        marginTop: '8px',
    },
    buttonPrimary: {
        padding: '8px 14px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonSecondary: {
        padding: '8px 14px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    toggleBtn: {
        marginLeft: '10px',
        padding: '2px 8px',
        fontSize: '12px',
        cursor: 'pointer',
    },
};

export default UserCredentials;