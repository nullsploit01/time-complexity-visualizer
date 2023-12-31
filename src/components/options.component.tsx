import { ChangeEvent, FC } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl } from '@mui/material';
import { OPTIONS } from 'src/constants/options.constant';
import { IOptions } from 'src/types/options.type';

type IProps = {
  showOptions: any;
  setShowOptions: React.Dispatch<React.SetStateAction<IOptions>>;
};

const Options: FC<IProps> = ({ setShowOptions, showOptions }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setShowOptions((prev) => {
      return { ...prev, [e.target.value]: checked };
    });
  };

  return (
    <FormControl>
      <Box sx={{ display: 'flex', flexDirection: 'row', mx: 5 }}>
        {OPTIONS.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.value}
              label={option.label}
              control={
                <Checkbox
                  checked={showOptions[option.value]}
                  onChange={handleChange}
                />
              }
            />
          );
        })}
      </Box>
    </FormControl>
  );
};

export default Options;
