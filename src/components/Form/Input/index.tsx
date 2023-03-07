import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface iInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  type: string;
  error: FieldError | undefined;
}

const Input = ({ label, register, type, error }: iInputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {/* tentar aninhar um input se não funcionar */}
    {error && (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    )}
  </fieldset>
);

export default Input;
