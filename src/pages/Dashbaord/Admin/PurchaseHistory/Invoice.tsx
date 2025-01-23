import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { TOrders } from './PurchaseHistory';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 20 },
  text: { fontSize: 12 },
});

const Invoice = ({ order }: { order: TOrders }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Invoice</Text>
        <Text style={styles.text}>Customer Name: {order.user.full_name}</Text>
        <Text style={styles.text}>Mobile Number: {order.user.mobileNumber}</Text>
        <Text style={styles.text}>Order Date: {new Date(order.createdAt).toLocaleDateString()}</Text>
        <Text style={styles.text}>Number of Items: {order.course.length}</Text>
        <Text style={styles.text}>₹Total Amount: ₹{order.totalPrice}</Text>
      </View>
    </Page>
  </Document>
);

export default Invoice;
