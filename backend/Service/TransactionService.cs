namespace backend.Service;
using backend.Repository;

public class TransactionService : ITransactionService
{

    private readonly ITransactionRepository transactionRepository;


    public TransactionService(ITransactionRepository transactionRepository){
        this.transactionRepository = transactionRepository;
    }
    public List<TransactionViewModel> GetAllTransactions()
    {
        var transactionsViewModel = new List<TransactionViewModel>();
        var transactions = transactionRepository.GetAllTransactions();
        foreach(var transaction in transactions){
            var transactionViewModel = new TransactionViewModel{
            TransactionId = transaction.Id,
            AccountNumber = transaction.AccountNumber,
            Amount = transaction.Amount,
            BankCode = transaction.BankCode,
            FullName = transaction.User.Name,
            IssueDate = transaction.IssueDate,
            TransactionType = transaction.TransactionType.Name,
        };
        transactionsViewModel.Add(transactionViewModel);
        }


        return transactionsViewModel;
    }

    public TransactionViewModel GetTransactionById(int id)
    {   
        var transaction = transactionRepository.GetTransactionById(id);
        var transactionViewModel = new TransactionViewModel{
        TransactionId = transaction.Id,
        AccountNumber = transaction.AccountNumber,
        Amount = transaction.Amount,
        BankCode = transaction.BankCode,
        FullName = transaction.User.Name,
        IssueDate = transaction.IssueDate,
        TransactionType = transaction.TransactionType.Name,
        };
       
        return transactionViewModel;
    }
}