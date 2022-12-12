namespace UnitTests;

public class UnitTest1
{
    [Fact]
    public void TestAdd()
    {
        Assert.Equal(2+2, 4);

    }

    [Fact]
    public void TestSubtract()
    {
        Assert.Equal(2-2, 0);

    }

    [Fact]
    public void TestMultiply()
    {
        Assert.Equal(2*2, 4);

    }

    [Fact]
    public void TestDivision()
    {
        Assert.Equal(2/2, 1);

    }

    
}