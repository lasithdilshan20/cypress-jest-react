import {render,screen,cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

afterEach(cleanup);

test('Should render complete todo component',()=>{
    const todo = {id: 1, title: 'IQ Camera p1', completed: true, };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('IQ Camera p1');
})

test('Should render not complete todo component',()=>{
    const todo = {id: 2, title: 'IQ Camera p2', completed: false, };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('IQ Camera p2');
    expect(todoElement).not.toContainHTML('<strike>');
})

test('match snapshot',()=>{
    const todo = {id: 1, title: 'IQ Camera p1', completed: false, };
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})