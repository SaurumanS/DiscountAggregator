using System;
using NUnit.Framework;
using ProductValidation = DiscountAggregator.AbstractTypes.Validation.ProductValidation;
using AbstractValidation = DiscountAggregator.AbstractTypes.Validation.AbstractValidation;
using DiscountAggregator.AbstractTypes.Validation;

namespace TestClassLibrary
{
    public class ValidationTests
    {
        [Test]
        public void IdCorrectValidationTest()
        {
            AbstractValidation abstractValidation = new ProductValidation();
            bool actual = IdValidation.IsValid("5dea55adb12b743f78443323");
            bool expected = true;
            Assert.AreEqual(expected, actual);
        }
        [Test]
        public void IdIncorrectValidationTest1()
        {
            AbstractValidation abstractValidation = new ProductValidation();
            bool actual = IdValidation.IsValid("5dea55adb12b743f7844"); //Correct id has in IdCorrectValidationTest
            bool expected = true;
            Assert.AreNotEqual(expected, actual);
        }
        [Test]
        public void IdIncorrectValidationTest2()
        {
            AbstractValidation abstractValidation = new ProductValidation();
            bool actual = IdValidation.IsValid("Hello"); //Correct id has in IdCorrectValidationTest
            bool expected = true;
            Assert.AreNotEqual(expected, actual);
        }
    }
}
