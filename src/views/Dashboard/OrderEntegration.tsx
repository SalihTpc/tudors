import EntConditions from "../../components/EntConditions";
import RecordedSettings from "../../components/RecordedSettings";
import Table from "../../components/logs/Order/List";

const OrderEntegration = () => {
  return (
    <>
      <EntConditions>
        <RecordedSettings />
      </EntConditions>
      <Table />
    </>
  );
};

export default OrderEntegration;
