import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class CanSum {
 
    private int targetSum;
    private List<Integer> numbers = new LinkedList<>();
    private Map<Integer, Boolean> memo = new HashMap<>();

    public CanSum(int targetSum, List<Integer> numbers) {
        this.targetSum = targetSum;
        this.numbers = numbers;
    }

    private boolean canSum(int targetSum, List<Integer> numbers) {
        if (targetSum == 0) return true;
        if (targetSum < 0) return false;

        for (int num : numbers) {
            int remainder = targetSum - num;

            if (canSum(remainder, numbers)) {
                return true;
            }
        }
        return false;
    }

    private boolean canSumMemo(int targetSum, List<Integer> numbers, Map<Integer, Boolean> memo) {
        if (memo.containsKey(targetSum)) return memo.get(targetSum);
        if (targetSum == 0) return true;
        if (targetSum < 0) return false;

        for (int num : numbers) {
            int remainder = targetSum - num;
            if (canSumMemo(remainder, numbers, memo)) {
                memo.put(targetSum, true);
                return true;
            }
        }
        memo.put(targetSum, false);
        return false;
    }

    
    public void clear() {
        this.numbers.clear();
        this.targetSum = 0;
    }

    public void runRecursive() {
        System.out.println(canSum(this.targetSum, this.numbers));
    }

    public void runMemoRecursive() {
        System.out.println(canSumMemo(this.targetSum, this.numbers, this.memo));
    }
    
    public static void main(String[] args) {
        CanSum c = new CanSum(300, Arrays.asList(7,14,28));
        // c.runRecursive();
        c.runMemoRecursive();
    }
}
