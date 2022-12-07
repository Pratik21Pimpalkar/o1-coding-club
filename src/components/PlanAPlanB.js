import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'
import { Card, CardContent, Grid, Typography } from "@mui/material";


// const useStyles = makeStyles({
//     root: {
//         minWidth: 250,
//         marginBottom: "50px",
//         minHeight: "450px",
//         "&:hover": {
//             marginTop: "-10px",
//             border: "2px solid transparent",
//             borderImageSlice: "1",
//             animation: "$myEffect 3000ms linear infinite",
//         },
//     },
//     "@keyframes myEffect": {
//         "0%": {
//             borderImage:
//                 "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
//             borderImageSlice: "1",
//         },
//         "50%": {
//             borderImage:
//                 "linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00)",
//             borderImageSlice: "1",
//         },
//         "100%": {
//             borderImage:
//                 "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
//             borderImageSlice: "1",
//         },
//     },
//     title: {
//         fontSize: 40,
//         fontWeight: 600,
//     },
//     pos: {
//         marginTop: "10px",
//         marginBottom: "20px",
//         fontSize: "15px",
//     },
//     table: {
//         border: "2px solid forestgreen",
//         width: "85%",
//         margin: "auto",
//         marginTop: "25px",
//     },
//     tr: {
//         borderBottom: "1px solid black",
//     },
//     th: {
//         borderBottom: "1px solid black",
//         borderLeft: "2px solid green",
//         fontSize: "20px",
//         padding: "10px",
//     },
//     th1: {
//         borderBottom: "1px solid black",
//         fontSize: "20px",
//         padding: "10px",
//     },
//     td: {
//         textAlign: "center",
//         borderLeft: "2px solid green",
//         fontSize: "20px",
//         padding: "10px",
//     },
//     td1: {
//         textAlign: "center",
//         fontSize: "20px",
//         padding: "10px",
//     },
// });

export default function IncomeAgreement() {
    // const classes = useStyles();

    return (
        <Wrapper>
            <Grid container justifyContent="center" spacing={9}>
            <Grid item sm={6}>
                    <Card className="root">
                        <CardContent>
                            <Typography className="title">PLAN A</Typography>
                            <hr />
                            <Typography
                                style={{ marginTop: "25px", fontSize: "45px", fontWeight: "550" }}
                                variant="h5"
                                component="h2"
                            >
                                ₹ 5000
                            </Typography>
                            <Typography className="pos" color="textSecondary">
                                Upfront Registration Fees
                            </Typography>
                            <hr />
                            <Typography
                                style={{ marginTop: "25px", fontSize: "25px", fontWeight: "550" }}
                                variant="h5"
                                component="h2"
                            >
                                Income Sharing Percentage
                            </Typography>

                            <table className="table" border="1">
                                <tr className="tr">
                                    <th className="th1">If You Get</th>
                                    <th className="th">You Pay</th>
                                </tr>
                                <tr className="tr">
                                    <td className="td1">Internship Offer</td>
                                    <td className="td">
                                        20% of monthly salary for 1 month
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td className="td1">Full-Time Offer</td>
                                    <td className="td">
                                        20% of monthly salary for 1 month
                                    </td>
                                </tr>
                            </table>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card className="root">
                        <CardContent>
                            <Typography className="title">PLAN B</Typography>
                            <hr />
                            <Typography
                                style={{ marginTop: "25px", fontSize: "45px", fontWeight: "550" }}
                                variant="h5"
                                component="h2"
                            >
                                ₹ 7000
                            </Typography>
                            <Typography className="pos" color="textSecondary">
                                Upfront Registration Fees
                            </Typography>
                            <hr />
                            <Typography
                                style={{ marginTop: "85px", fontSize: "27px", fontWeight: "550", }}
                                variant="h5"
                                component="h2"
                            >
                                No Income Sharing Required
                            </Typography>

                            {/* <table className="table" border="1">
                                <tr className="tr">
                                    <th className="th1">If You Get</th>
                                    <th className="th">You Pay</th>
                                </tr>
                                <tr className="tr">
                                    <td className="td1">Internship Offer</td>
                                    <td className="td">
                                        35% of monthly salary for 1 month
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td className="td1">Full-Time Offer</td>
                                    <td className="td">
                                        30% of monthly salary for 1 month
                                    </td>
                                </tr>
                            </table> */}
                        </CardContent>
                    </Card>
                </Grid>

              
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div`
-webkit-text-fill-color:initial;
text-align: center;
margin-top: 3rem;

.root
    {
        /* min-width: 250; */
        margin-bottom: 50px;
        /* background-color: #1e1c1c; */
        min-height: 530px;
        &:hover {
            margin-top: -10px;
            border: 2px solid transparent;
            border-image-slice: 1;
            animation: myEffect 3000ms linear infinite,
        }
    }
    @keyframes myEffect {
        0% {
            border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
            border-image-slice: 1;
        }
        50% {
            border-image: linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00);
            border-image-slice: 1,
        }
        100% {
            border-image:linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
            border-image-slice: 1,
        }
    }
    .title {
        font-size: 40px;
        font-weight: 600;
        color:#8831ff;
    }
    .pos{
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 15px;
    }
    .table{
        border: 2px solid forestgreen;
        width: 85%;
        margin: auto;
        margin-top: 25px;
    }
    tr {
        border-bottom: 1px solid black;
    };
    .th {
        border-bottom: 1px solid black;
        border-left: 2px solid green;
        font-size: 20px;
        padding: 10px;
    }
    .th1 {
        border-bottom: 1px solid black;
        font-size: 20px;
        padding: 10px;
    }
    .td{
        text-align: center;
        border-left: 2px solid green;
        font-size: 20px;
        padding: 10px;
    }
    .td1 {
        text-align: center;
        font-size: 20px;
        padding: 10px;
    }
`