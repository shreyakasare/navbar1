import { createTheme } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1d93a6"
        },
        secondary: {
            main: "#ff770B"
        }
    },
    overrides: {
        MuiInputBase: {
            input: {
                height: "1em"
            },

            inputTypeSearch: {
                color: '#000 !important'
            }
        },
        MuiFormHelperText: {
            root: {
                color: '#FF0000 !important'
            }
        },
        MuiTabs: {
            root: {
                minHeight: '38px'
            }
        },
        MuiFormLabel: {
            root: {
                fontFamily: "calibri",
                fontSize: '1.1rem',
                fontWeight: '600',
                '&.Mui-disabled': {
                    color: 'rgb(78 78 78 / 74%) !important',
                    backgroundColor: '#fff',
                    padding: '0 5px'
                }
            }
        },

        MuiTypography: {
            body1: {
                fontFamily: "Acumin Variable Concept",
                fontSize: '12px'
            }
        },
        MuiTab: {
            root: {
                fontFamily: "Acumin Variable Concept",
                minHeight: '38px'
            }
        },
        PrivateNotchedOutline: {
            root: {
                borderWidth: '0.5px'
            }
        },

        MuiTypography: {
            h6: {
                fontSize: '1rem'
            }
        },
        MuiTableCell: {
            alignLeft: {
                padding: "0.35rem"
            },
            head: {
                backgroundColor: '#002A36 !important',
                color: "#fff",
                textAlign: "center !important"
            },
            root: {
                padding: "2px !important",
                paddingLeft: "10px !important",
                textAlign: 'left',
                boxSizing: 'border-box'
            },
            body: {
                fontSize: '0.9rem !important',
            },
        },
        MuiOutlinedInput: {
            root: {
                fontSize: '13px'
            }
        },
        MuiInputLabel: {
            formControl: {
                fontSize: '14px',
            },
            asterisk: {
                color: '#FF0000',
                fontSize: '13px'
            }
        },
        PrivateTabIndicator: {
            colorPrimary: {
                backgroundColor: '#1d93a6'
            }
        },
        MuiTab: {
            '& textColorSecondary': {
                '& Mui-selected': {
                    color: '#1d93a6 !important'

                }
            },
            root: {
                minHeight: '38px'
            }
        },

        MuiToolbar: {

            regular: {
                minHeight: "2.69rem !important",
                backgroundColor: "#20686B !important",
                color: '#fff'
            },
        },
        MuiInput: {
            input: {
                "&::placeholder": {
                    color: "#fff"
                },
                color: "#fff",
            }
        },
        MuiTablePagination: {
            toolbar: {
                minHeight: "1.25rem",
                paddingRight: "2px",
                backgroundColor: "#fff !important",
            },
            input: {
                color: 'black'
            }
        },
        MuiInput: {
            input: {
                color: "#fff",
            }
        },
        MuiDrawer: {
            paper: {
                top: "13%",
                width: "25%"
            }
        },
        MuiButton: {
            root: {
                borderRadius: 4,
                fontFamily: "Acumin Variable Concept",
            }
        },
        MuiDialog: {
            root: {
            },
            paper: {
                width: "35%"
            }
        }
    },
    props: {
        MuiButton: {
            variant: "contained",
            size: "small"
        },

    },
    MuiBoxRoot: {
        borderTop: '1px solid #e4e4dd !important',
        padding: '16px 8px 8px',
        borderBottom: '1px solid #e4e4dd!important'
    },
    MuiButtoncontainedPrimary: {
        "&$disabled": {
            backgroundColor: blueGrey[100],


        },

    }
});


