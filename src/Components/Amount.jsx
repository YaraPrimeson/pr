import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Amount = ({ amount, setAmount, summ, setSumm }) => {
  return (
    <div>
      <p>Vanya </p>
      <p>age:{amount}</p>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => setAmount(amount + 1)}>add age</Button>
        <Button onClick={() => setAmount(amount - 1)}>minus age</Button>
        <Button
          onClick={() => {
            setAmount(amount * 2);
            setSumm(summ + 3500);
          }}
        >
          * age
        </Button>
      </ButtonGroup>
      <p>{summ}</p>
    </div>
  );
};

export default Amount;
