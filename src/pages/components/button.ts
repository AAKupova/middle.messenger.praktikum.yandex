import { Button } from '../../components/Button';

interface CreateButtonProps {
  text: string,
  classButton: string,
  disabled: string,
}

export const createButton = (data: CreateButtonProps) => new Button(data, 'button');
