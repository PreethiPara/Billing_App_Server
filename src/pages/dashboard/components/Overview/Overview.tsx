import { Box, ListItemIcon, MenuItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import CustomDropDown from "../../../../helper/CustomDropDown/CustomDropDown";
import React, { useEffect } from "react";
import "./Overview.scss";
import { overViewIconInfo } from "../../constants/overViewInfo";
import { overViewInfo } from "../../constants/overViewInfo";
import transactions from "../../constants/transactions";
import storeDetails from "../../constants/storeDetails";
export default function OverView() {
  const [overview, setOverview] = React.useState<string>("");
  const [revenue,setRevenue]=React.useState<number>(0);
  const [totalProducts,setTotalProducts]=React.useState<number>(0);
  const [totalTransactions,setTotalTransactions]=React.useState<number>(0);
  function handleOverview(selectedValue: string) {
    setOverview(selectedValue);
  }
  function calculateRevenueAndNumberOfTransactions(){
    const storeTransactions=transactions.filter((transaction)=>
      transaction.storeName==="Hapree"
    );
    const totalRevenue=storeTransactions.reduce((acc,curr)=>{
      const branchRevenue=curr.transactions.reduce(
        (total,transaction)=>total+transaction.amount,0
      );
      return acc+branchRevenue;
    },0);
    const totalStoreTransactions=storeTransactions.reduce((acc,curr)=>{
      const branchTransactionsCount = curr.transactions.length;
        console.log(acc);
        return acc + branchTransactionsCount;
    },0)
    console.log(totalStoreTransactions);
    setTotalTransactions(totalStoreTransactions);
    setRevenue(totalRevenue);
  }

  function calculateTotalProducts(){
    const totalProducts=storeDetails.filter((store)=>store.storeName==="Hapree");
    setTotalProducts(totalProducts[0].listOfProducts.length);
    
  }
  useEffect(()=>{
    calculateRevenueAndNumberOfTransactions();
    calculateTotalProducts();
  },[]);
  return (
    <div className="overview">
      <Paper elevation={3} className="bg-pink-100 p-3 ml-10 mt-10 mr-10 main-overview">
        <Typography fontWeight={"500"} variant="h4">Overview</Typography>
        <div className="overview-dropdown">
            <CustomDropDown handleChangeInDropDown={(event: string)=>{handleOverview(event)}} label='Weekly' listOfDropDownEntries={["Weekly","Monthly","Yearly"]} iconImageWithName={[]} />
        </div>
      </Paper>
      <Box className="flex ml-10 mt-10 mr-10 overview-list">
        <Paper elevation={3} className="p-7 overview-info">
          <MenuItem sx={{ '&:hover': { backgroundColor: 'rgb(169, 169, 215)' } }}>
              {overViewIconInfo[0]}
              <Typography variant="h6">{overViewInfo[0]}</Typography>
          </MenuItem>
          <Typography variant="h5" className="overview-number">₹ {revenue}</Typography>
        </Paper>
        <Paper elevation={3} className="p-7 overview-info">
          <MenuItem sx={{ '&:hover': { backgroundColor: 'rgb(169, 169, 215)' } }}>
              {overViewIconInfo[1]}
              <Typography variant="h6">{overViewInfo[1]}</Typography>
          </MenuItem>
          <Typography variant="h5" className="overview-number">₹ {revenue}</Typography>
        </Paper>
        <Paper elevation={3} className="p-7 overview-info">
          <MenuItem sx={{ '&:hover': { backgroundColor: 'rgb(169, 169, 215)' } }}>
              {overViewIconInfo[2]}
              <Typography variant="h6">{overViewInfo[2]}</Typography>
          </MenuItem>
          <Typography variant="h5" className="overview-number">{totalProducts}</Typography>
        </Paper>
        <Paper elevation={3} className="p-7 overview-info">
          <MenuItem sx={{ '&:hover': { backgroundColor: 'rgb(169, 169, 215)' } }}>
              {overViewIconInfo[3]}
              <Typography variant="h6">{overViewInfo[3]}</Typography>
          </MenuItem>
          <Typography variant="h5" className="overview-number">{totalTransactions}</Typography>
        </Paper>
        
          
            {/* {
              overViewInfo.map((value,itr)=>{
                return(
                  <Paper elevation={3} className="p-10 overview-info">
                      <MenuItem>
                        {overViewIconInfo[itr]}
                        <Typography variant="h6">{value}</Typography>
                      </MenuItem>
                  
                  </Paper>
                )
              })
            } */}
          
        
      </Box>
    </div>
  );
}
