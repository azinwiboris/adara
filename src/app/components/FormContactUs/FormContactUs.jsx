import {Stack, FormGroup} from '@carbon/react';
import { Button, TextInput, RadioButtonGroup, RadioButton, TextArea } from '@carbon/react';


function FormContactUs(){

    return(
        <div>
        <h1>Send us a Message</h1>
            <FormGroup
  legendId="form-group-1"
  legendText="Enter your Name"
  style={{
    maxWidth: '400px'
  }}
>
  <Stack gap={4}>
    <TextInput
      id="one"
      labelText="First Name"
    />
    <TextInput
      id="two"
      labelText="Last Name"
    />
    <RadioButtonGroup
      defaultSelected="radio-1"
      legendText="Choose a Program"
      name="formgroup-default-radio-button-group"
    >
      <RadioButton
        id="radio-1"
        labelText="HND"
        value="radio-1"
      />
      <RadioButton
        id="radio-2"
        labelText="Bachelors"
        value="radio-2"
      />
      <RadioButton
        id="radio-3"
        labelText="Masters"
        value="radio-3"
      />
       <RadioButton
        id="radio-3"
        labelText="Others"
        value="radio-3"
      />
    </RadioButtonGroup>
    <TextArea labelText="Text Area label" 
    className="some-class" 
    placeholder="Placeholder text" 
    id="test5" rows={4} />

<Button>Submit</Button>
  
  </Stack>
</FormGroup>

        </div>
    );
}
export default FormContactUs;