import React from 'react';
import Datalist from './Field/Datalist';
import Fieldset from './Fieldset';
import Buttons from './Buttons';
import Input from './Field/Input';
import InputGroup from './Field/InputGroup';
import Label from './Label';
import Select from './Field/Select';
import Textarea from './Field/Textarea';

import * as S from './Form.style';

function FormComponent({ children }: { children: React.ReactElement | React.ReactElement[] }) {
	return <S.Form>{children}</S.Form>;
}

FormComponent.Row = S.Row;

FormComponent.Color = Input.Color;
FormComponent.Checkbox = Input.Checkbox;
FormComponent.Datalist = Datalist;
FormComponent.Date = Input.Date;
FormComponent.DatetimeLocal = Input.DatetimeLocal;
FormComponent.Email = Input.Email;
FormComponent.Fieldset = Fieldset;
FormComponent.File = Input.File;
FormComponent.Hidden = Input.Hidden;
FormComponent.Copy = Input.Copy;
FormComponent.InputGroup = InputGroup;
FormComponent.Label = Label;
FormComponent.Month = Input.Month;
FormComponent.Number = Input.Number;
FormComponent.Password = Input.Password;
FormComponent.Radio = Input.Radio;
FormComponent.Range = Input.Range;
FormComponent.Search = Input.Search;
FormComponent.Select = Select;
FormComponent.Switch = Input.Switch;
FormComponent.Tel = Input.Tel;
FormComponent.Text = Input.Text;
FormComponent.Textarea = Textarea;
FormComponent.Time = Input.Time;
FormComponent.Url = Input.Url;
FormComponent.Week = Input.Week;

FormComponent.Buttons = Buttons;

export default FormComponent;
