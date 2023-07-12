import Grid from 'src/core/components/grid/grid';

export const RowTextField = ({ children, label }: any) => (
  <Grid row alignItems="center" justifyContent="between">
    <Grid xs={4} className="pe-0">
      <h6
        style={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: 'Verdana',
        }}
      >
        {label}
      </h6>
    </Grid>
    <Grid className="ps-1 position-relative">{children}</Grid>
  </Grid>
);

export const RowTextFieldQuote = ({ children, label }: any) => (
  <Grid row alignItems="center" justifyContent="between">
    <Grid xs={5} className="pe-0">
      <h6
        style={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: 'Verdana',
        }}
      >
        {label}
      </h6>
    </Grid>
    <Grid className="ps-1">{children}</Grid>
  </Grid>
);

export const TitleField = ({ children, title }: any) => (
  <>
    <h6
      style={{
        fontSize: '13px',
        fontWeight: 700,
        fontFamily: 'Verdana',
        textTransform: 'uppercase',
        fontStyle: 'normal',
        lineHeight: '140%',
        paddingTop: '24px',
        paddingBottom: '6px',
      }}
    >
      {title}
    </h6>
    {children}
  </>
);

export const HeaderField = ({ title }: any) => (
  <>
    <h5
      style={{
        fontSize: '18px ',
        fontWeight: 700,
        fontFamily: 'Verdana',
        fontStyle: 'normal',
        lineHeight: '140%',
      }}
    >
      {title}
    </h5>
  </>
);
