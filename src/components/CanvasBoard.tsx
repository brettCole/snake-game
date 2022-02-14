import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increaseSnake,
    INCREMENT_SCORE,
    makeMove,
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_RIGHT,
    MOVE_UP,
    resetGame,
    RESET_SCORE,
    scoreUpdates,
    stopGame,
} from '../store/actions';
import { IGlobalState } from '../store/reducers';
import {
    clearBoard,
    drawObject,
    generateRandomPosition,
    hasSnakeCollided,
    IObjectBody,
} from '..utils';
import Instructions from './Instructions';

export interface ICanvasBoard {
    height: number,
    width: number,
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
    return (
        <canvas
            style = {{ border: '3px solid black' }}
            height = { height }
            width = { width }
        />
    );
};

export default CanvasBoard;