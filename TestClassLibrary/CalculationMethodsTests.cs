using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using DiscountAggregator.AbstractTypes.Validation;
namespace TestClassLibrary
{
    [TestFixture]
    class CalculationMethodsTests
    {
        [Test]
        public void DiscountCounterWhereOldPriceIsNull()
        {
            Assert.That(() => ProductValidation.DiscountCounter(null, 203), Throws.TypeOf<ArgumentException>());
        }
        [Test]
        public void DiscountCounterWhereNewPriceIsNull()
        {
            Assert.That(() => ProductValidation.DiscountCounter(203, null), Throws.TypeOf<ArgumentException>());
        }
        [Test]
        public void DiscountCounterWhereAllArgumentsIsNull()
        {
            Assert.That(() => ProductValidation.DiscountCounter(null, null), Throws.TypeOf<ArgumentException>());
        }
        [Test]
        public void DiscountCounterCorrect()
        {
            var actual = ProductValidation.DiscountCounter(100, 10);
            int expected = -90;
            Assert.AreEqual(expected, actual);
        }
        [Test]
        public void DiscountCounterCorrectWithDouble()
        {
            var actual = ProductValidation.DiscountCounter(102.3, 10.23);
            int expected = -90;
            Assert.AreEqual(expected, actual);
        }
    }
}
