/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { TOrders } from './PurchaseHistory';
import logo from '../../../../assets/Images/pm-gurukul.png';
import { formatDate } from '../../../../utils/formatDate';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, position: 'relative' },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: { width: 200, height: 70 },
  address: { textAlign: 'right' },
  section: { marginBottom: 10, backgroundColor: '#F2F2F2', padding: 8, borderRadius: 6 },
  section2: { marginBottom: 10 },
  boldText: { fontWeight: 'bold', color: 'black' }, // Black bold titles
  normalText: { color: '#4F4F4F' }, // Gray normal text
  table: { width: '100%', marginTop: 10, borderWidth: 1, borderColor: '#ccc' },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  tableCell: { flex: 1, padding: 5, textAlign: 'center' },
  tableHeader: { backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  declarationRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 10,
    textAlign: 'center',
  },
  footerDetails: { marginTop: 20, alignItems: 'center' },
  clickableLink: {
    textAlign: 'center',
    fontSize: 10,
    color: 'blue',
    textDecoration: 'underline',
    position: 'absolute',
    bottom: 10,
    left: 30,
  },
  statusCard: {
    backgroundColor: '#f21313',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

const Invoice = ({ order }: { order: TOrders }) => {
  if (!order || !order._id) {
    return <Text>Invalid Order</Text>;
  }

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.address}>
            <Text>BIZGURUKUL PRIVATE LIMITED</Text>
            <Text>Regd. Add: A-26, SECOND FLOOR,</Text>
            <Text>SECTOR-16, Noida,</Text>
            <Text>Gautam Buddha Nagar- 201301,</Text>
            <Text>Uttar Pradesh, India</Text>
            <Text>GSTIN: 09AAJCB0091Q1Z6</Text>
            <Text>State Name: Delhi, Code: 07</Text>
            <Text>PAN: AAJCB0091Q</Text>
          </View>
        </View>

        {/* Invoice Details Section */}
        <View style={styles.section}>
          <Text>
            <Text style={styles.boldText}>Invoice#:</Text>
            <Text style={styles.normalText}> {order._id}</Text>
          </Text>
          <Text>
            <Text style={styles.boldText}>Invoice Date:</Text>
            <Text style={styles.normalText}> {formatDate(order.createdAt)}</Text>
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.boldText}>Status:</Text>
            <Text style={styles.statusCard}>PAID</Text>
          </View>
        </View>

        {/* Invoiced To Section */}
        <View style={styles.section2}>
          <Text style={styles.boldText}>Invoiced To:</Text>
          <Text>
            <Text style={styles.boldText}>Name:</Text>
            <Text style={styles.normalText}> {order?.user?.full_name}</Text>
          </Text>
          <Text>
            <Text style={styles.boldText}>Mobile Number:</Text>
            <Text style={styles.normalText}> {order?.user?.mobileNumber}</Text>
          </Text>
        </View>

        {/* Course Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>Course Name</Text>
            <Text style={styles.tableCell}>Description</Text>
            <Text style={styles.tableCell}>Qty</Text>
            <Text style={styles.tableCell}>Price</Text>
          </View>

          {/* Table Content */}
          {order?.course?.map((item: any, index: number) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item?.title}</Text>
              <Text style={styles.tableCell}>{item?.description}</Text>
              <Text style={styles.tableCell}>{order?.course?.length || 0}</Text>
              <Text style={styles.tableCell}>{order?.discountedPrice}</Text>
            </View>
          ))}

          {/* GST Row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              GST ({order?.gst}%)
            </Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>
              {(order?.discountedPrice * order?.gst) / 100}
            </Text>
          </View>

          {/* Total Row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Total</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>
              {order?.totalPrice?.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Declaration Section */}
        <View style={styles.table}>
          <Text style={styles.declarationRow}>
            Declaration: We declare that this invoice shows the actual price of the goods/services
            described and that all particulars are true and correct. This is a Computer Generated
            Invoice. No Signature Required.
          </Text>
        </View>

        {/* Footer Section */}
        <Text style={styles.clickableLink}>www.pmgurukul.com</Text>
        <View style={styles.footerDetails}>
          <Text>Generated on {new Date().toLocaleString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
