import React, { useEffect, useRef, useState } from 'react';
import './DinosaurGame.css';

const DinosaurGame = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [dinoPosition, setDinoPosition] = useState(10);
    const [obstaclePosition, setObstaclePosition] = useState(100);
    const gameRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'Space' || event.code === 'ArrowUp') {
                jump();
            }
        };

        const checkCollision = () => {
            if (obstaclePosition <= 0 && dinoPosition >= 8) {
                setIsGameOver(true);
            }
        };

        const moveObstacle = () => {
            setObstaclePosition((prev) => (prev <= 0 ? 100 : prev - 0.5));
            checkCollision();
        };

        const startGame = () => {
            setIsGameOver(false);
            setObstaclePosition(100);
            gameRef.current = setInterval(moveObstacle, 20);
        };

        document.addEventListener('keydown', handleKeydown);
        startGame();

        return () => {
            clearInterval(gameRef.current);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [obstaclePosition, dinoPosition]);

    const jump = () => {
        if (dinoPosition >= 10) return;
        setDinoPosition((pos) => pos + 5);
        setTimeout(() => {
            setDinoPosition(10);
        }, 400);
    };

    if (isGameOver) {
        return (
            <div className="game-over">
                <h2>Игра окончена!</h2>
                <button onClick={() => setIsGameOver(false)}>Перезапустить</button>
            </div>
        );
    }

    return (
        <div className="dino-game-container">
            <div className="dino" style={{ bottom: `${dinoPosition}vh` }} />
            <div className="obstacle" style={{ left: `${obstaclePosition}vw` }} />
        </div>
    );
};

export default DinosaurGame;
