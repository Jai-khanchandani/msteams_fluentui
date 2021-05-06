import React from 'react'
import {  TextField, PrimaryButton } from '@fluentui/react';
import { IDropdownStyles, Dropdown, IDropdownOption } from '@fluentui/react';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/';
import { useState } from 'react';
import styled from 'styled-components';
import { initializeIcons } from "office-ui-fabric-react/lib";
initializeIcons();


const stackTokens = {childrenGap: 50};
const stackStyles: Partial<IStackStyles> = { root: { width: 700 } };
const columnProps: Partial<IStackProps> = { 
    tokens: {childrenGap: 35}, 
    styles: { root: { width:300 } },
 };

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
};

const dropdownHere: IDropdownOption[] = [
    { key : 'sap', text: 'SAP' },
    { key : 'cn', text: 'CN' },
];


function Basic() {
    const [supplierName, setSupplierName] = useState('');
    const [pack, setPack] = useState<any>('');
    const [date1, setDate1] = useState('');

    const handleChange = (e:any) => {
        setSupplierName(e.target.value);            
    console.log(supplierName);
    };


    const handleDropDown = (e:any, selectedOption:any) => {
        setPack({pack:selectedOption.text});
    }
    console.log(pack);



    const handleDate = (e: any) => {
        setDate1(e.target.value);

    };

    console.log(date1);
    
    const handleSubmit = () => {
        alert("Details saved");
    }


    return (
        <Stuff>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <TextField label="Financial Year" placeholder="Enter Year" />
                <TextField label="Supplier Name" name="supplierName" placeholder="Enter Name" value={supplierName} onChange={handleChange} />
                <TextField label="Confidence Level" placeholder="Enter Level" />
                <TextField label="Part Description" placeholder="Enter Description"  />
                <Dropdown 
                    label="Select package"
                    placeholder = "select one"
                    defaultSelectedKey={pack}
                    defaultValue={pack}
                    options = {dropdownHere}
                    styles= {dropdownStyles}
                    onChange = {handleDropDown}
                />
                <TextField label="Implementation status" placeholder="Enter Status" />

            </Stack>

            <Stack {...columnProps}>
                <TextField label="Applicable Model" placeholder="Select Model" />
                <TextField label="Responsibility" placeholder="Select Responsibility" />
                <TextField label="Applicable Supplier Volume" placeholder="Enter Volume" />
                <TextField label="Nego Saving Level" placeholder="Select Level" />
                <TextField type="date" label="Effectivity Date" placeholder="Enter Date" onChange={handleDate} max= "2021-03-30" />
                <TextField label="Saving Volume or %" placeholder="Select %" />
            </Stack>

            <Stack {...columnProps}>
                <TextField label="L1 Commodity" placeholder="Select Model" />
                <TextField label="Supplier" placeholder="Select Supplier" />
                <TextField label="L5 Commodity" placeholder="Enter Volume" />
                <TextField label="Part #" placeholder="Select Level" />
                <TextField label="Sector" placeholder="Choose Sector" />
                <TextField label="Cash Flow Saving" placeholder="Enter Amount" />
            </Stack>
        </Stack>
        <h4>
        <PrimaryButton text="Submit" onClick={handleSubmit} />
        </h4>
        </Stuff>
    );
}



export default Basic

const Stuff = styled.div`

    margin-left: 50px;
    margin-top: 30px;

    > h4 {
        margin-top: 50px;
        margin-left: 610px;
    }
`;

