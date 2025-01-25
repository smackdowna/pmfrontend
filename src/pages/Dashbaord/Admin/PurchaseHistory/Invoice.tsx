import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { TOrders } from './PurchaseHistory';
import logo from '../../../../assets/Images/pm-gurukul.png';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, position: 'relative' },
  headerContainer: { marginBottom: 20, textAlign: 'center' },
  title: { fontSize: 20, textAlign: 'center', fontWeight: 'bold' },
  logo: { width: 80, height: 80, marginBottom: 10, alignSelf: 'center' },
  address: { textAlign: 'center', marginBottom: 15 },
  section: { marginBottom: 20 },
  boldText: { fontWeight: 'bold' },
  table: { width: '100%', marginTop: 10, borderWidth: 1, borderColor: '#ccc' },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  tableCell: { flex: 1, padding: 5 },
  tableHeader: { backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  declarationRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 10,
    textAlign: 'center',
  },
  footerDetails: {
    marginTop: 20,
    alignItems: 'center',
  },
  clickableLink: {
    textAlign: 'center',
    fontSize: 10,
    color: 'blue',
    textDecoration: 'underline',
    position: 'absolute',
    bottom: 10,
    left: 30,
  },
});


const Invoice = ({ order }: { order: TOrders }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.headerContainer}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.title}>PM Gurukul</Text>
          <Text style={styles.address}>2/130, GEETA COLONY DELHI – 110031</Text>
        </View>
        <View style={styles.section}>
          <Text>Invoice#: {order._id}</Text>
          <Text>Invoice Date: {new Date(order.createdAt).toLocaleDateString()}</Text>
          <Text>Status: Paid</Text>
        </View>
        <View style={styles.section}>
          <Text>Invoiced To:</Text>
          <Text>{order.user.full_name}</Text>
          <Text>{order.user.mobileNumber}</Text>
        </View>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>Course Name</Text>
            <Text style={styles.tableCell}>Description</Text>
            <Text style={styles.tableCell}>Qty</Text>
            <Text style={styles.tableCell}>Price</Text>
          </View>
          {/* Table Content */}
          {order.course.map((courseName, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{courseName}</Text>
              <Text style={styles.tableCell}>Online Learning Course</Text>
              <Text style={styles.tableCell}>{order?.course?.length || 0}</Text>
              <Text style={styles.tableCell}>₹{order.discountedPrice}</Text>
            </View>
          ))}
          {/* Tax Line */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>GST ({order?.gst}%)</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>₹{(order?.discountedPrice * order?.gst) / 100}</Text>
          </View>
          {/* Total Line */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Total</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>₹{order.totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        {/* Declaration */}
        <View style={styles.table}>
          <Text style={styles.declarationRow}>
            Declaration: We declare that this invoice shows the actual price of the goods/services
            described and that all particulars are true and correct. This is a Computer Generated
            Invoice. No Signature Required.
          </Text>
        </View>
        {/* Footer Details */}
        <Text style={styles.clickableLink}>www.pmgurukul.com</Text>
        <View style={styles.footerDetails}>
          <Text>Generated on {new Date().toLocaleString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
