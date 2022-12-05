public class TransactionViewModel
{
        public decimal TransactionId { get; set; }
        public string FullName {set; get;}
        public string TransactionType { get; set; }
        public string AccountNumber { get; set;}
        public string BankCode { get; set; }
        public DateTime IssueDate { get; set; }
        public decimal Amount { get; set; }
}