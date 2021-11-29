import { Spinner, VStack } from "native-base";
import React from "react";
import { useQuery } from "react-query";
import { balanceLog } from "../../../api/customer";
import TransactionList from "../../../components/list/TransactionList";

const TransactionHistoryScreen = ({ navigation }) => {
  const [transactions, setTransactions] = React.useState(null);

  const transactionLogs = useQuery("fetch-balance-logs", balanceLog, {
    onSuccess: (data) => {
      setTransactions(data.data);
    },
    onError: (err) => console.error("Error on retrieving balance logs", err),
    enabled: false,
  });

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      transactionLogs.refetch();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <VStack>
      {transactions === null ? (
        <Spinner color="primary.800" size="lg" />
      ) : (
        <TransactionList data={transactions} />
      )}
    </VStack>
  );
};

export default TransactionHistoryScreen;
